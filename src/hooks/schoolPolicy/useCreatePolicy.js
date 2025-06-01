import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createSchoolPolicy } from "../../services/servicesApi";
import toast from "react-hot-toast";
export const useCreateSchoolPolicy = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createSchoolPolicy,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["policy"] });
      toast.success("School policy created successfully");
    },
    onError: () => {
      toast.error("Failed to create school policy");
    },
  });
};
