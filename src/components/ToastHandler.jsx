"use client";

import { useEffect } from "react";
import { toast } from "react-hot-toast";

export default function ToastHandler({ successMessage, errorMessage }) {
  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage);
    }
  }, [successMessage]);

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage);
    }
  }, [errorMessage]);

  return null; // UI render nahi karta, sirf toast trigger karta hai
}
