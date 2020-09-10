import enviroment from "./enviroment"

const getAllProject = async () => {
  const url = enviroment.baseurl + `/project?_embed=task`;
  return fetch(url).then(res => res.json())
}

export default { getAllProject }