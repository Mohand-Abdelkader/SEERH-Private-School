import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSlide } from "../../services/servicesApi";

export const useUpdateSlide = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ slideId, slideData }) => updateSlide(slideId, slideData),
    onSuccess: (_, { slideId }) => {
      queryClient.invalidateQueries({ queryKey: ["slides"] });
      queryClient.invalidateQueries({ queryKey: ["slide", slideId] });
    },
  });
};
