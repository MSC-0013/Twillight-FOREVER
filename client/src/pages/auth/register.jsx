import CommonForm from "@/components/common/form";
import { useToast } from "@/components/ui/use-toast";
import { registerFormControls } from "@/config";
import { registerUser } from "@/store/auth-slice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const initialState = {
  userName: "",
  email: "",
  password: "",
};

function AuthRegister() {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { toast } = useToast();

  function onSubmit(event) {
    event.preventDefault();
    dispatch(registerUser(formData)).then((data) => {
      if (data?.payload?.success) {
        toast({
          title: data?.payload?.message,
        });
        navigate("/auth/login");
      } else {
        toast({
          title: data?.payload?.message,
          variant: "destructive",
        });
      }
    });
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 px-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8 sm:p-10 animate-fadeIn">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-purple-700 tracking-tight">
            FOREVER
          </h1>
          <h2 className="text-2xl font-semibold text-gray-700 mt-2">
            Create a new account
          </h2>
          <p className="mt-3 text-gray-500 text-sm">
            Already have an account?{" "}
            <Link
              className="text-purple-600 font-medium hover:underline"
              to="/auth/login"
            >
              Sign In
            </Link>
          </p>
        </div>

        <CommonForm
          formControls={registerFormControls}
          buttonText={"Sign Up"}
          formData={formData}
          setFormData={setFormData}
          onSubmit={onSubmit}
        />

        <p className="mt-6 text-center text-gray-400 text-sm">
          By creating an account, you agree to FOREVER's{" "}
          <Link className="underline hover:text-purple-600" to="#">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link className="underline hover:text-purple-600" to="#">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </div>
  );
}

export default AuthRegister;
