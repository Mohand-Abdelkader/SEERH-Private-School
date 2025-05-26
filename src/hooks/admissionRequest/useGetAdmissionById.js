import { useQuery } from "@tanstack/react-query";
import { getAdmissionById } from "../../services/servicesApi";
export function useGetAdmissionById(admissionId) {
  const { data:admission, isLoading } = useQuery({
    queryKey: ["admission", admissionId],
    queryFn: () => getAdmissionById(admissionId),
  });

  return { admission, isLoading };
}
