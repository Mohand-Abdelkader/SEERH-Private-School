import { useQuery } from "@tanstack/react-query";
import { getNewsById } from "../../services/servicesApi";

export function useGetMessageById(id) {
  const { data: news, isLoading } = useQuery({
    queryKey: ["news", id],
    queryFn: () => getNewsById(id),
  });
  return { news, isLoading };
}
