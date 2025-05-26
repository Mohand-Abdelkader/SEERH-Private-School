import { useQuery } from "@tanstack/react-query";
import { getAdmissionRequests } from "../../services/servicesApi";
export function useAdmissionRequests() {
  const { data: admissionRequests, isLoading } = useQuery({
    queryKey: ["admissionRequests"],
    queryFn: getAdmissionRequests,
  });

  return { admissionRequests, isLoading };
}
