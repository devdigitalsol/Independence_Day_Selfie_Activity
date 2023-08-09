import Header from "../Layout/Header";
import FooterImg from "../../assets/images/Bottom Flag Img.png";
import { useState } from "react";
import Modal from "./Modal";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import { useAuth } from "../context/AuthContext";
import Footer from "../Layout/Footer";

const schema = yup
  .object({
    employeeCode: yup
      .number()
      .typeError("Enter valid code ")
      .positive("Enter positive code")
      .integer("Enter valid Integer code")
      .required("Field is Required"),
    employeeName: yup.string().required("Field is Required"),
    noOfYearsPractice: yup
      .number()
      .typeError("Enter valid number")
      .positive("Enter positive code")
      .integer("Enter valid Integer code")
      .required("Field is Required"),
    noOfPatientsDaily: yup
      .number()
      .typeError("Enter valid number")
      .positive("Enter positive code")
      .integer("Enter valid Integer code ")
      .required("Field is Required"),
    termsAndCondition: yup
      .boolean()
      .oneOf([true], "Accept terms and conditions"),
  })
  .required();

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { setUserData } = useUserContext();
  const { setAuthenticated } = useAuth();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    setUserData(data);
    setAuthenticated(true);
    navigate("/flagpage");
  };

  const handleBlur = () => {
    document.body.scrollTop = 0;
    document.getElementsByClassName("backImage").scrollTop = 0;
  };

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="w-[100%] h-[100vh] backImage" style={{ overflow: "auto" }}>
      <Header />
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ position: "relative", zIndex: "12", padding: "70px 0" }}
      >
        <div className="center-content-flex" style={{ height: "500px" }}>
          <div className="h-[100%] w-[90%] xl:w-[40%] lg:w-[60%] md:w-[70%] sm:w-[80%]   ">
            <div className="h-[10%] center-content-flex items-end ">
              <p className="p-dynamic-text ">Fill the below details</p>
            </div>
            <div className="h-[14%]  center-content-flex flex-col  ">
              <input
                placeholder="Employee code without P000 "
                name="employeeCode"
                id="employeeCode"
                {...register("employeeCode")}
                onBlur={handleBlur}
                className="textField placeholder-[#007DC4] text-[#007DC4] placeholder:text-[14px] text-center placeholder:font-extralight   "
              />
              <p className="error-msg">{errors.employeeCode?.message}</p>
            </div>
            <div className="h-[14%]  center-content-flex flex-col ">
              <input
                placeholder="Name of doctor "
                name="employeeName"
                id="employeeName"
                {...register("employeeName")}
                onBlur={handleBlur}
                className="textField placeholder-[#007DC4] text-[#007DC4] placeholder:text-[14px] text-center placeholder:font-extralight  "
              />
              <p className="error-msg">{errors.employeeName?.message}</p>
            </div>
            <div className="h-[14%] center-content-flex flex-col ">
              <input
                name="noOfYearsPractice"
                id="noOfYearsPractice"
                {...register("noOfYearsPractice")}
                placeholder="No. of years of practice "
                onBlur={handleBlur}
                className="textField placeholder-[#007DC4] text-[#007DC4] placeholder:text-[14px] text-center placeholder:font-extralight   "
              />
              <p className="error-msg">{errors.noOfYearsPractice?.message}</p>
            </div>
            <div className="h-[14%]  center-content-flex flex-col ">
              <input
                name="noOfPatientsDaily"
                id="noOfPatientsDaily"
                {...register("noOfPatientsDaily")}
                placeholder="No. of patients treated daily "
                onBlur={handleBlur}
                className="textField placeholder-[#007DC4] text-[#007DC4] placeholder:text-[14px] text-center placeholder:font-extralight  "
              />
              <p className="error-msg">{errors.noOfPatientsDaily?.message}</p>
            </div>
            <div className="h-[18%]  center-content-flex">
              <div className="center-content-flex p-2   gap-4  text-xl  w-[90%] flex-col ">
                <div className="center-content-flex p-2  gap-4  conditionText  w-[100%] ">
                  <input
                    type="checkbox"
                    name="termsAndCondition"
                    id="termsAndCondition"
                    className="checkbox-size"
                    onBlur={handleBlur}
                    {...register("termsAndCondition")}
                  />
                  <span className="text-[#007DC4] text-[16px] font-medium  ">
                    I have read and agree to the{" "}
                    <span
                      className="underline text-[#007DC4] "
                      onClick={() => setModalOpen(true)}
                    >
                      terms and conditions.
                    </span>
                  </span>
                </div>
                <div>
                  <p className="error-msg">
                    {errors.termsAndCondition?.message}
                  </p>
                </div>
              </div>
            </div>
            <div className="h-[16%] center-content-flex">
              <button
                type="submit"
                // disabled={!isValid}
                id="submit_button"
                className="button-design  bg-[#007DC4]"
              >
                SUBMIT
              </button>
            </div>
          </div>
        </div>
        {modalOpen && (
          <Modal setModalOpen={setModalOpen}>
            <div className="center-content-flex flex-col gap-4">
              <h4 className="text-[#007DC4] font-bold text-xl mb-1">
                Terms & Conditions
              </h4>
              <p className=" text-md  text-[#007DC4]">
                I have opted to use the “Acidity while on wheels” activity web
                link of my own volition and agree to upload my personal details
                therein for participating in the activity. I state that the
                personal details shared by me are true and accurate and the
                Company shall not have any liability arising from its reliance
                on the same. I understand that no data will be retained by the
                Company post the event. I agree that the all contents used for
                promotion of the event shall be the property of Dr. Reddy's, and
                meant for its use only.I have read the terms and conditions of
                the Dr. Reddy's data privacy policy as mentioned in
                <a
                  href=""
                  // href="https://www.drreddys.com/privacy-policy#:~:text=We%20will%20not%20knowingly%20collect,through%20direct%20off%2Dline%20contact"
                  className="text-[#007DC4] break-all "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.drreddys.com/privacy-policy#:~:text=We%20will%20not%20knowingly%20collect,through%20direct%20off%2Dline%20contact
                </a>
              </p>
            </div>
          </Modal>
        )}
      </form>

      <Footer />
    </div>
  );
};
export default LoginForm;
