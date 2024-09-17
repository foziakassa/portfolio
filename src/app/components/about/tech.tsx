'use client';
import useSwr from "swr";
import fetcher from '../../../shared/utils/fetcher';
import { CollectionQuery } from "../../../models/collection-query.model";

export default function Tech() {
    const collection: CollectionQuery = {};

    const {
        data,
        isLoading,
        error,
    } = useSwr(
        { url: "/portal-portfolios/get-educations", params: collection },
        fetcher
    );

    if (data) {
     const ff=data.data[0].technologies
     console.log(ff)
        return (
            <div className="">
                <img
                    className="w-full h-auto"
                    src={`https://skillicons.dev/icons?i=`}
                    alt="fozia"
                    loading="lazy"
                />
            </div>
        );
    }

    // Handle loading and error states if necessary
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading data</div>;

    return null; // Return null if there's no data
}