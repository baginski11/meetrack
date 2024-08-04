"use client"
import React, { PropsWithChildren } from 'react'
import { Organization } from '@/utils/types'

export interface TOrganizationListContext {
    organizations: Organization[]
}

interface TOrganizationListContextValues extends TOrganizationListContext {
    addOrganization: (organization: Organization) => void
}

const OrganizationListContext = React.createContext<TOrganizationListContextValues | null>(null)

export const OrganizationListContextProvider = ({
                                                    children,
                                                    organizations,
                                                }: PropsWithChildren<TOrganizationListContext>) => {
    const [state, setState] = React.useState<Organization[]>(organizations)

    const addOrganization = (organization: Organization) => {
        setState([...state, organization])
    }

    return (
        <OrganizationListContext.Provider value={{ organizations: state, addOrganization }}>
            {children}
        </OrganizationListContext.Provider>
    )
}

export const useOrganizationListContext = () => {
    const context = React.useContext(OrganizationListContext)

    if (context === null) {
        throw new Error('useOrganizationListContext must be used within a OrganizationListContextProvider')
    }

    return context
}
