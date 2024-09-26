import React, { useEffect, useState } from "react";
import {
  ContainerComponents,
  FormComponents,
  ButtonComponents,
  LoadingComponents,
  ErrorComponents,
  PreventComponents,
} from "../components";
import { useNavigate } from "react-router-dom";
import { Login, Register } from "../service/auth.service";
import useApi from "../hook/useApi";
import { useSelector,useDispatch } from "react-redux";
import { LoginAction } from "../action/auth.action";

const LoginPage = () => {
const {loading,error,data,auth} = useSelector((store) => store.auth)
  const dispatch = useDispatch()
  
  const nav = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  // const { handleDealApi, loading, error, data } = useApi(Login);

  const handleInputChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  useEffect(() => {
    if (data) {
      nav("/home");
    }
  }, [data]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    LoginAction(dispatch,formData)
    

    // const res = await Register(formData);
  };
  // console.log(store)

  return (
    <PreventComponents fail={"/home"} check={localStorage.getItem("auth")}>
      <ContainerComponents>
        {loading ? (
          <LoadingComponents />
        ) : (
          <div className=" Center">
            <div className=" w-2/6 h-auto">
              <h1 className=" font-serif text-4xl mb-10 text-center">
                Login Your Contact
              </h1>
              {error && <ErrorComponents />}
              <form className=" space-y-7 mt-5" onSubmit={handleSubmit}>
                <FormComponents
                  value={formData.email}
                  onChange={handleInputChange}
                  name={"email"}
                  type={"email"}
                  label={"Enter Your Email"}
                  placeholder="example@gmail.com"
                />

                <FormComponents
                  value={formData.password}
                  onChange={handleInputChange}
                  name={"password"}
                  type={"password"}
                  label={"Password"}
                  placeholder="Password"
                />

                <ButtonComponents type="submit" style={" ! rounded-lg"}>
                  Login
                </ButtonComponents>
              </form>

              <p className=" mt-5">
                You haven't account please{" "}
                <button
                  className=" text-blue-400 underline"
                  onClick={() => nav("/register")}
                >
                  Register
                </button>
              </p>
            </div>
          </div>
        )}
      </ContainerComponents>
    </PreventComponents>
  );
};

export default LoginPage;
