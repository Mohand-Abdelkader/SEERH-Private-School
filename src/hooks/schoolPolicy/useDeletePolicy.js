import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteSchoolPolicy } from "../../services/servicesApi";
import toast from "react-hot-toast";
export const useDeletePolicy = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteSchoolPolicy,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["policy"] });
      toast.success("Policy deleted successfully");
    },
    onError: () => {
      toast.error("Failed to delete policy");
    },
  });
};
