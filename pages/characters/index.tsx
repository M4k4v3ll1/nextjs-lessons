import {API} from "../../assets/api/api";
import {CharacterType, ResponseType} from "../../assets/api/rick-and-morty-api";
import {PageWrapper} from "../../components/PageWrapper/PageWrapper";
import {Header} from "../../components/Header/Header";

export const getStaticProps = async () => {
    const characters = await API.rickAndMorty.getCharacters()
    return {
        props: {
            characters
        }
    }
}

type Characters = {
    characters: ResponseType<CharacterType>
}

const Characters = (props: Characters) => {
    const {characters} = props

    const charactersList = characters.results.map(c => (
            <div key={c.id}>{c.name}</div>
        ))

    return (
        <PageWrapper>
            <Header/>
            {charactersList}
        </PageWrapper>
    )
}

export default Characters