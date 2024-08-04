
type Plan = "Free" | "Pro"


interface Organization {
    name: string
    id: string
    plan: Plan
    logoURL: string

}

interface DBUser {
    id: string;
    name: string;
    organizationIds: Organization['id'][];
}




export type { Organization, DBUser }