import { useQuery } from "@tanstack/react-query";
import { getSchoolPolicy } from "../../services/servicesApi";

export const usePolicy = () => {
  return useQuery({
    queryKey: ["policy"],
    queryFn: getSchoolPolicy,
  });
};
