import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSchoolPolicy } from "../../services/servicesApi";
import toast from "react-hot-toast";
export const useUpdatePolicy = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ policyId, policyData }) =>
      updateSchoolPolicy(policyId, policyData),
    onSuccess: (_, { policyId }) => {
      toast.success("School policy updated successfully");
      queryClient.invalidateQueries({ queryKey: ["policy"] });
      queryClient.invalidateQueries({ queryKey: ["policy", policyId] });
    },
  });
};
