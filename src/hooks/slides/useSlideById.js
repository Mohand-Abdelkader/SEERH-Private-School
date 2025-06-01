import { useQuery } from "@tanstack/react-query";
import { getSlideById } from "../../services/servicesApi";

export const useSlideById = (slideId) => {
  return useQuery({
    queryKey: ["slide", slideId],
    queryFn: () => getSlideById(slideId),
    enabled: !!slideId,
  });
};
