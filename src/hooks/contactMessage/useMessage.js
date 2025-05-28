import { useQuery } from "@tanstack/react-query";
import { getMessages } from "../../services/servicesApi";
export function useContactMessages() {
  const { data: contactMessages, isLoading } = useQuery({
    queryKey: ["contactMessages"],
    queryFn: getMessages,
  });

  return { contactMessages, isLoading };
}
