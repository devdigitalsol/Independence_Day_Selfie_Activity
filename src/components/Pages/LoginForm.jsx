import Header from "../Layout/Header";
import FooterImg from "../../assets/images/Bottom Flag Img.png";
import { useState } from "react";
import Modal from "./Modal";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

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
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const onSubmit = (data) => {
    navigate("/flagpage");
  };

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className=" w-[100%] h-[100vh] backImage">
      <div className="h-[8vh]">
        <Header />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="h-[72vh] flex justify-center items-center">
          <div className="h-[100%] w-[90%] xl:w-[40%] lg:w-[60%] md:w-[70%] sm:w-[80%]  ">
            <div className="h-[14%] flex justify-center items-center">
              <p className="text-3xl text-[#007DC4] font-bold ">
                Fill the below details
              </p>
            </div>
            <div className="h-[14%]  flex justify-center items-center flex-col ">
              <input
                placeholder="Employee code without P000 "
                name="employeeCode"
                id="employeeCode"
                {...register("employeeCode")}
                className="textFieldSize inputSize  p-[20px]  rounded-2xl border-2 border-[#00ADEE] placeholder-[#007DC4]"
              />
              <p className="error-msg">{errors.employeeCode?.message}</p>
            </div>
            <div className="h-[14%]  flex justify-center items-center flex-col">
              <input
                placeholder="Name of doctor "
                name="employeeName"
                id="employeeName"
                {...register("employeeName")}
                className="textFieldSize inputSize  p-[20px]  rounded-2xl border-2 border-[#00ADEE] placeholder-[#007DC4]  "
              />
              <p className="error-msg">{errors.employeeName?.message}</p>
            </div>
            <div className="h-[14%] flex justify-center items-center flex-col">
              <input
                name="noOfYearsPractice"
                id="noOfYearsPractice"
                {...register("noOfYearsPractice")}
                placeholder="No. of years of practice "
                className="textFieldSize inputSize  p-[20px]  rounded-2xl border-2 border-[#00ADEE] placeholder-[#007DC4]  "
              />
              <p className="error-msg">{errors.noOfYearsPractice?.message}</p>
            </div>
            <div className="h-[14%]  flex justify-center items-center flex-col">
              <input
                name="noOfPatientsDaily"
                id="noOfPatientsDaily"
                {...register("noOfPatientsDaily")}
                placeholder="No. of patients treated daily "
                className="textFieldSize inputSize  p-[20px]  rounded-2xl border-2 border-[#00ADEE] placeholder-[#007DC4]  "
              />
              <p className="error-msg">{errors.noOfPatientsDaily?.message}</p>
            </div>
            <div className="h-[14%]  flex justify-center items-center ">
              <div className="flex p-2  items-center gap-4 justify-center text-xl  w-[80%] flex-col ">
                <div className="flex p-2  items-center gap-4 justify-center conditionText  w-[100%] ">
                  <input
                    type="checkbox"
                    name="termsAndCondition"
                    id="termsAndCondition"
                    className=""
                    {...register("termsAndCondition")}
                  />
                  <span className="text-[#007DC4] ">
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
            <div className="h-[16%] flex justify-center items-center">
              <button
                type="submit"
                className="btn bg-[#007DC4] text-white  rounded-lg "
              >
                SUBMIT
              </button>
            </div>
          </div>
        </div>
        {modalOpen && (
          <Modal setModalOpen={setModalOpen}>
            <div className="flex justify-center items-center flex-col gap-4">
              <h4 className="text-[#007DC4] font-bold text-2xl mb-1">
                Terms & Conditions:
              </h4>
              <p className="xl:text-xl lg:text-xl md:text-xl sm:text-lg text-xl  text-[#007DC4]">
                I have opted to use the “Acidity while on wheels” activity web
                link of my own volition and agree to upload my personal details
                therein for participating in the activity. I state that the
                personal details shared by me are true and accurate and the
                Company shall not have any liability arising from its reliance
                on the same. I understand that no data will be retained by the
                Company post the event. I agree that the all contents used for
                promotion of the event shall be the property of Dr. Reddy's, and
                meant for its use only.
              </p>
            </div>
          </Modal>
        )}

        {/* footer */}
        <div className="h-[20vh] ">
          <img src={FooterImg} alt="" className="h-[20vh]" />
        </div>
      </form>
    </div>
  );
};
export default LoginForm;
