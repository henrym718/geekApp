import axiosPrivate from "../../../api/axiosPrivate";

class ProfileServices {
  async uploadAvatar(file) {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const { data } = await axiosPrivate.post("/image/upload", formData);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async updateDataUser(dataUser) {
    const { data } = await axiosPrivate.post("/user/createuser", dataUser);
    return data;
  }
}

export default new ProfileServices();
