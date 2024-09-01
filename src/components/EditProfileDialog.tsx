import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormik } from "formik";
import * as Yup from "yup";
import { IProfile } from "@/interfaces";

interface EditProfileDialogProps {
  open: boolean;
  onClose: () => void;
  profile: IProfile;
  onSave: (profileData: IProfile) => void;
}

const EditProfileDialog = ({
  open,
  onClose,
  profile,
  onSave,
}: EditProfileDialogProps) => {
  const formik = useFormik({
    initialValues: profile,
    validationSchema: Yup.object({
      first_name: Yup.string().required("Required"),
      last_name: Yup.string().required("Required"),
      phone: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      bio: Yup.string().nullable(),
    }),
    onSubmit: (values) => {
      onSave(values);
    },
  });

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogTitle>Edit Profile</DialogTitle>
        <form onSubmit={formik.handleSubmit} className="space-y-2">
          <div className="space-y-2">
            <Label htmlFor="first_name">First Name</Label>
            <Input
              id="first_name"
              type="text"
              {...formik.getFieldProps("first_name")}
            />
            {formik.touched.first_name && formik.errors.first_name ? (
              <div className="text-red-600">{formik.errors.first_name}</div>
            ) : null}
          </div>
          <div className="space-y-2">
            <Label htmlFor="last_name">Last Name</Label>
            <Input
              id="last_name"
              type="text"
              {...formik.getFieldProps("last_name")}
            />
            {formik.touched.last_name && formik.errors.last_name ? (
              <div className="text-red-600">{formik.errors.last_name}</div>
            ) : null}
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Mobile Number</Label>
            <Input id="phone" type="text" {...formik.getFieldProps("phone")} />
            {formik.touched.phone && formik.errors.phone ? (
              <div className="text-red-600">{formik.errors.phone}</div>
            ) : null}
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" type="email" {...formik.getFieldProps("email")} />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-600">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="space-y-2">
            <Label htmlFor="bio">Bio</Label>
            <Input id="bio" type="text" {...formik.getFieldProps("bio")} />
            {formik.touched.bio && formik.errors.bio ? (
              <div className="text-red-600">{formik.errors.bio}</div>
            ) : null}
          </div>
        </form>
        <DialogFooter>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="submit" onClick={() => formik.submitForm()}>
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EditProfileDialog;
