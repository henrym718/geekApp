import AuthEntity from "../../domain/entities/authEntity.js"
import createError from "http-errors"


class RegisterCredentialsUseCase {
    constructor({ authService, tokenService, userService }) {
        this.authService = authService
        this.tokenService = tokenService
        this.userService = userService
    }

    async execute(credentials) {
        try {
            /*obtener la data*/
            const { email, password } = credentials
            const userEntity = new AuthEntity(email, password)

            /*comprobar que el usuario no exista para poder continuar*/
            const user = await this.authService.getAuthByfield({ email: userEntity.getEmail() })
            if (user) { throw createError.NotFound("Usuario encontrado") }

            /*encryptar contraseña*/
            const passwordEncrypted = this.authService.encryptPasswords(userEntity.getPassword())

            /*actualizo la entidad*/
            userEntity.setPassword(passwordEncrypted)

            /*crear RefreshToken para el usuario*/
            const payloadRefreshToken = { email: userEntity.getEmail() }
            userEntity.setRefreshToken(this.tokenService.createRfereshToken(payloadRefreshToken))

            /* agrego al registro su respectivo refreshtoken */
            const response = await this.authService.createNewRegisterAuth({ email: userEntity.getEmail(), password: userEntity.getPassword(), refreshToken: userEntity.getRefreshToken() })
            if (!response) { throw createError.BadGateway("Error de base de datos al crear el registro") }


            /*creo el nuevo usuario con su email y su rol en la db user*/
            const result = await this.userService.createNewUser({ email: userEntity.getEmail(), rol: "BASICUSER" })
            if (!result) { throw createError.BadGateway("Error de base de datos al crear el registro") }

            /*retornar el token*/
            return { refreshToken: userEntity.getRefreshToken() }
        } catch (err) {
            throw err
        }
    }
}
export default RegisterCredentialsUseCase;
