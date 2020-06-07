import React, { useState } from "react";
import SuccessMessage from "../../components/SuccessMessage";
import "./UserForm.scss";
import api from "../../api";

const UserForm = () => {
  const [user, setUser] = useState({
    name: "Zé Ninguém",
    avatar: "",
    username: "zeninguem",
    email: "zeninguem@gmail.com",
  });
  const [submit, setSubmit] = useState(false);

  const handleSetInputUser = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleAddUser = (event) => {
    event.preventDefault();
    api.post.User(user).then(() => setSubmit(true));
  };

  return (
    <>
      <section className="profile" data-testid="user-form">
        <div className="container">
          <div className="profile-data">
            <div className="user">
              <div className="user__thumb">
                {user.avatar ? (
                  <img src={user.avatar} alt="" />
                ) : (
                  <img src="/img/profile-placeholder.png" alt="" />
                )}
              </div>

              {user.name && (
                <p className="user__name">
                  {user.name}
                  <span>@{user.username}</span>
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="post__form">
        <div className="container">
          <div className="post__form__wrapper">
            <label>Nome</label>
            <input
              type="text"
              name="name"
              value={user.name}
              placeholder="Ex: Fulano da Silva"
              onChange={(event) => handleSetInputUser(event)}
            />

            <label>Usuário</label>
            <input
              type="text"
              name="username"
              value={user.username}
              placeholder="Ex: @seu_usuario_que_não_precisa_ser_seu_nome"
              onChange={(event) => handleSetInputUser(event)}
            />

            <label>Email</label>
            <input
              type="email"
              name="email"
              value={user.email}
              placeholder="Ex: fulano@provedor.com"
              onChange={(event) => handleSetInputUser(event)}
            />

            <label>
              Url da Imagem de Perfil (pode ser de alguma rede social)
            </label>
            <input
              type="text"
              name="avatar"
              placeholder="http://..."
              onChange={(event) => handleSetInputUser(event)}
            />

            <button type="button" onClick={(event) => handleAddUser(event)}>
              Cadastrar
            </button>
          </div>
        </div>
      </section>

      {submit && <SuccessMessage />}
    </>
  );
};

export default UserForm;
