import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createAdmission as createAdmissionApi } from "../../services/servicesApi";
export function useCreateAdmission() {
  const queryClint = useQueryClient();
  const { mutate: createAdmission, isPending } = useMutation({
    mutationFn: createAdmissionApi,
    onSuccess: (data) => {
      queryClint.invalidateQueries({ queryKey: ["admissionRequests"] });
      console.log("Admission request created successfully:", data);
    },
    onError: (error) => {
      console.error("Error creating admission request:", error);
    },
  });
  return { createAdmission, isPending };
}
