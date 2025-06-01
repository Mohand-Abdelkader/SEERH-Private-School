import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createSlide } from "../../services/servicesApi";
import toast from "react-hot-toast";
export const useCreateSlide = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createSlide,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["slides"] });
      toast.success("Slide created successfully");
    },
    onError: () => {
      toast.error("Failed to create slide");
    },
  });
};
