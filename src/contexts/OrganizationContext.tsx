"use client"
import React, { PropsWithChildren, useEffect } from 'react'
import {Organization} from "@/utils/types";


export interface TOrganizationContextProps {
    organization: Organization
}

export type TOrganizationContext = TOrganizationContextProps & {
    updateOrganization: (organization: Organization) => void
}

const OrganizationContext = React.createContext<TOrganizationContext | null>(null)

export const OrganizationContextProvider = ({
                                                children,
                                                organization,
                                            }: PropsWithChildren<TOrganizationContextProps>) => {
    const [org, setOrg] = React.useState<Organization>(organization)

    const updateOrganization = (organization: Organization) => {
        setOrg(organization)
        console.log(organization)
    }

    useEffect(() => {
        setOrg(organization)
    }, [organization])

    return (
        <OrganizationContext.Provider value={{ organization: org, updateOrganization }}>
            {children}
        </OrganizationContext.Provider>
    )
}

export const useOrganizationContext = () => {
    const context = React.useContext(OrganizationContext)

    if (context === null) {
        throw new Error('useOrganizationContext must be used within a OrganizationContextProvider')
    }

    return context
}
