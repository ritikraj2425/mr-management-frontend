'use client'
import { GroupCard } from "@/components/group-card";
import Loading from "@/components/ui/loading";
import { AuthContext } from "@/hooks/use-context";
import { useContext } from "react";

export default function Groups() {
    const authContext = useContext(AuthContext);

    if (!authContext) {
        throw new Error("AuthContext is not provided. Wrap your component inside <AuthProvider>.");
    }

    const { userGroups } = authContext;

    if (!userGroups) {
        return <Loading />
    }

    return <>
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">Your Groups</h3>
            </div>
            {
                userGroups ?
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {userGroups?.map((group: any) => (
                            <GroupCard key={group._id} group={group} />
                        ))}
                    </div>
                    :
                    <div>
                        No group found
                    </div>
            }

        </div>
    </>
}