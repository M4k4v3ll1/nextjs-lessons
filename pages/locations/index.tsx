import {API} from "../../assets/api/api";
import {LocationType, ResponseType} from "../../assets/api/rick-and-morty-api";
import {PageWrapper} from "../../components/PageWrapper/PageWrapper";
import {Header} from "../../components/Header/Header";

export const getStaticProps = async () => {
    const locations = await API.rickAndMorty.getLocations()
    return {
        props: {
            locations
        }
    }
}

type Locations = {
    locations: ResponseType<LocationType>
}

const Locations = () => {
    const locations = async () => await API.rickAndMorty.getLocations()

    const locationsList = locations.map(l => (
            <div key={l.id}>{l.name}</div>
        ))

    return (
        <PageWrapper>
            <Header/>
            {locationsList}
        </PageWrapper>
    )
}

export default Locations