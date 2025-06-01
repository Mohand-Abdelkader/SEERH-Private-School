import { useQuery } from "@tanstack/react-query";
import { getSlides } from "../../services/servicesApi";

export const useSlides = () => {
  return useQuery({
    queryKey: ["slides"],
    queryFn: getSlides,
  });
};
