import CommonForm from "@/components/common/form";
import { useToast } from "@/components/ui/use-toast";
import { loginFormControls } from "@/config";
import { loginUser } from "@/store/auth-slice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const initialState = {
  email: "",
  password: "",
};

function AuthLogin() {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const { toast } = useToast();

  function onSubmit(event) {
    event.preventDefault();
    dispatch(loginUser(formData)).then((data) => {
      if (data?.payload?.success) {
        toast({
          title: data?.payload?.message,
        });
      } else {
        toast({
          title: data?.payload?.message,
          variant: "destructive",
        });
      }
    });
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 px-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8 sm:p-10 animate-fadeIn">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-purple-700 tracking-tight">
            FOREVER
          </h1>
          <h2 className="text-2xl font-semibold text-gray-700 mt-2">
            Sign in to your account
          </h2>
          <p className="mt-3 text-gray-500 text-sm">
            New to FOREVER?{" "}
            <Link
              className="text-purple-600 font-medium hover:underline"
              to="/auth/register"
            >
              Create an account
            </Link>
          </p>
        </div>

        <CommonForm
          formControls={loginFormControls}
          buttonText={"Sign In"}
          formData={formData}
          setFormData={setFormData}
          onSubmit={onSubmit}
        />

        <p className="mt-6 text-center text-gray-400 text-sm">
          By signing in, you agree to FOREVER's{" "}
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

export default AuthLogin;
