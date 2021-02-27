import { HeaderContainer, OptionsContainer, OptionLink } from './header.styles';

const Header = () => (
    <HeaderContainer>
        <OptionsContainer>
            <OptionLink to='/'>
                All Pokemons
            </OptionLink>
            <OptionLink to='/myPokemon'>
                My Pokemon
            </OptionLink>
        </OptionsContainer>
    </HeaderContainer>
)



export default Header;