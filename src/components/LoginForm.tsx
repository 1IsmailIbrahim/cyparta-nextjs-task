"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import image from "/public/logo.png";
import Image from "next/image";
import { useFormik } from "formik";
import * as Yup from "yup";

const LoginForm = () => {
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
      try {
        const formData = new URLSearchParams();
        formData.append("email", values.email);
        formData.append("password", values.password);

        const response = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/login/`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: formData.toString(),
          }
        );

        if (!response.ok) {
          throw new Error("Failed to login");
        }

        const data = await response.json();
        localStorage.setItem("token", data.access);
        router.push("/profile");
      } catch (error: any) {
        setStatus({ general: error.message });
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
              <Button type="submit" className="w-full bg-[#262626]">
                Sign in
              </Button>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginForm;
