import { useQuery } from "@tanstack/react-query";
import { getMessageById } from "../../services/servicesApi";

export function useGetMessageById(id) {
  const { data: message, isLoading } = useQuery({
    queryKey: ["contactMessages", id],
    queryFn: () => getMessageById(id),
  });
  return { message, isLoading };
}
