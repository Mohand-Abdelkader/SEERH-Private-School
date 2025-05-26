import { deleteAdmissionRequest } from "../../services/servicesApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
export function useDeleteAdmission() {
  const queryClient = useQueryClient();

  const { mutate: deleteAdmission, isLoading } = useMutation({
    mutationFn: deleteAdmissionRequest,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admissionRequests"] });
    },
    onError: (error) => {
      console.error("Error deleting admission request:", error);
    },
  });

  return { deleteAdmission, isLoading };
}
