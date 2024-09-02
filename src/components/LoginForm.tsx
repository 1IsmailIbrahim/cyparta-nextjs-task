"use client";

import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useFormik } from "formik";
import * as Yup from "yup";
import Cookies from "js-cookie";
import { login } from "@/app/api/auth";
import image from "/public/logo.png";
import { LoaderIcon } from "lucide-react";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: async (values, { setStatus }) => {
      setLoading(true);
      try {
        const data = await login(values.email, values.password);
        localStorage.setItem("token", data.access);
        Cookies.set("token", data.access, { expires: 7 });
        router.push("/employees/profile");
      } catch (error: any) {
        setStatus({ general: error.message });
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <div className="w-full max-w-md">
      <Image
        className="mx-auto"
        src={image}
        alt="Cyparia Software Empire"
        width={247}
        height={158}
      />
      <Card className="space-y-4 pt-6">
        <CardContent>
          <form onSubmit={formik.handleSubmit} className="space-y-4">
            {formik.status?.general && (
              <div className="text-red-600">{formik.status.general}</div>
            )}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="nouran@cyparta.com"
                {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-600">{formik.errors.email}</div>
              ) : null}
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="************"
                {...formik.getFieldProps("password")}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="text-red-600">{formik.errors.password}</div>
              ) : null}
            </div>
            <CardFooter>
              <Button
                type="submit"
                className="w-full bg-[#262626]"
                disabled={loading}
              >
                {loading ? <LoaderIcon className="animate-spin" /> : "Sign in"}
              </Button>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginForm;
