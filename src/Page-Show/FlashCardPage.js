import React from "react";
import Grid from "../DeclarePrimitive/LayoutComponents/Grid";
import FlashCard from "../Components/FlashCardComponents";
import apples from "../Data/apples";
import AddCard from "../Components/FlashCardComponents/AddCard";
import { elastic as Menu } from "react-burger-menu";
import styled from "styled-components";
import { A } from "styled-system-html";

// icon주소 => https://icons8.com/icon/pack/free-icons/nolan

const MenuList = styled(A)`
  @font-face {
    font-family: "BMHANNAPro";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_seven@1.0/BMHANNAPro.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
  font-family: "BMHANNAPro";
  display: inline-block;
  text-decoration: none;
  margin-bottom: 20px;
  color: #a39e9e;
  transition: color 0.2s;
  border: 1px;
  bordercolor: white;
`;

// 데이터 입력 & 주는곳
class FlashCardPage extends React.Component {
  constructor(props) {
    super(props);
    this.menuToggle = this.menuToggle.bind(this);
  }

  state = {
    isOpen: false,
    cardKey: null,
    cardTitle: "None"
  };

  handleStateChange(state) {
    this.setState({ isOpen: state.isOpen });
  }

  closeMenu() {
    this.setState({ isOpen: false });
  }

  menuToggle(key, title) {
    this.setState({ isOpen: !this.state.isOpen });
    this.setState({ cardKey: key });
    this.setState({ cardTitle: title });
    // title 가지고 이제 뭘할 수 있음
  }

  render() {
    return (
      <>
        <Menu
          right
          isOpen={this.state.isOpen}
          customBurgerIcon={false}
          onStateChange={state => this.handleStateChange(state)}
        >
          <MenuList href="/" onClick={() => this.closeMenu()}>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAJkSURBVEhL5ZTfS1NhHMa9iW6C7kLComZbc+1Yyw2JzggtZmDKFKYxFBVtzSwddLPVVXmx6iaImJVBlEm0VsncdrPsQtMgxEDsJvAfiP6G59v7PT/GmWl712V94OH9vt/ned6zq9X8f+wfg6NuDDN1VynNJ98N6+9oitAu+yU010fxrf4yNg39PBJFzD5KNj75XvJEjvPcM56ojDKMZWWE0la5h7Eu9mHDD2v3LRllBJ+0B2TwDWHdGEt4h9DnHURCm8XJd82wsF1vR/z9v4fPX8Nufx/eCe+zON/y3bBKbNfbkcDFKsIWqup19ujhYIhUoYiEVGtPit5uPRwKktrbTZFK4py1J8VAhx4e6KT4YAetlgs59m4s4srNRWyyEku4ruWNnhTRdj0cuUDO0XY6Z5XYab966gOSjxaIWGJO8c7sSREL6OGJAAVjbXSnTAGKszefR3K+QMTK5vWPmD0pEq16OH4W42IuWhVvxSx7a+8x+XWOiLU2h/u8M3tS3Dqjhyf9OHD7FDxlasEx9lJd2Pe0Hx7WwxDV8s7sSXHvtB4WZ1josVV3VSQNr8uy1/5uxCn/kQfNVYQtVNWb9lUOP/GhTeS+THtp1ZTY/TDsysyc0D8y20TOtIv2PPfA++o4HXrmo1qe2XvpQVL46otGHOYc78yeFBm3Hn7jRuq1AkXclzJuimcUhHnWPAXJdCOpIvNdeEHemT0pcg16OOvEyaKN9uaOoiXrIGfWRQd5Zi/fgGTBRWrBiQDfGbMnxUcHNop2sv1JIjO14EDPlt2G8URllm2YWLFRulqJ3rjxxD9JTc0vH1764cqe5R8AAAAASUVORK5CYII="
              alt="title icon"
            />
            {"   "}
            {this.state.cardTitle}
          </MenuList>

          <MenuList href="/" onClick={() => this.closeMenu()}>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAOBSURBVEhL5ZXfT1N3GMZPdBdqgmZbsuiylBj1tJEEBUKpFVIMjF8dsJIyQAqtJaVCFNFkjKsdXObgqp1ZssFmpEw322YuTBNDMXiqrZtxV7uZf4nb3fP1fQ8vhY3aGG/9JN+83+d53vf0nJ7TU+3NovycctjGMWEbQ9w2rhLrFRPsS8vrcyQCrx7F7/YokvooAvYI3EfHcZirfhZD9lGkONcjaJeRV8flx+5jYfxcGcZ8dQQHxC4K59T7A/eXB9UusUtTM6r21AWx5jyDAbEKuMMocwZwkHvEKuAKYtAZglks24YngJ8aAxgUqfX2qp2Ng4iS9wetp55B/ELVpL481RGPR70lrRplAfJuiCxOaz+8tBZEWnxIZ97WjytNQ3hXLIsuuiryjbYBrLb48Y7YGnnX2/tK3KOPe/GYzny/z4cPfH54xS5J9ydo7e5Fhq+YNc0e6PYjZ4X/Z6BHOfp9SBqG2kE13+fDHao+iUtCfZf7ejAiUuvvUWm/H3aRmwQ7MRn8CEOhbpwOdWI24MN75D0xtnznn+Zhn8ohOv0IulgW4S6UhbqQF6lZx+nEOZGbnPUiNtYBN9U/x7zqbfaiHfg82qFCvI+vwU7r3/gDpaxKmv0NqC97kR593stxYlawlclWLE11ouJCC+5PtsCk9RetHPlDnN/KqNFkRqmNxdoaFGguNdGsbLy/1A6dj2cFW5luRmyqGS7eX3Rh92dNKmsFwtoy7OZd/JO9qxTV56wlsphuwkOe4/3UKbj5eFawlZlGXJjxrJ81Y3iQn2tW+0Ra/P0r9Ge3EeUqloXRhr3cL1IzTmGY9PZ7csWjHLP1SInU5uoRmW1QMyJLQnNfzJ5EWKQ216DSX9X/90QKxF14HGtYf1el6bn/+gTuXXWjxQpfQrwO7fETWOV+1t+48T7NFa5qG9/VoWOhFtdEags1ah/p1XknjGtulIltcdWJveR/OV+LzLf1608jQ97i97VoFVmcpSrcXKzefHeZ9Dv58ThGElXIUWYmqlR6qRoPWdM6Y2hqh7RqieMYpqz0u4u5U6P2pCphJo9tftAGKXp60jXKxlWsAslKDNPcg2JZUcxyteu3Ctykdf22o/T/CefLFVhcPoobPCf2q7Oio23FgdyKQ6UzDgQzOk7ed0Dnypp9yvPcJyOvz6OD0M1DOJ89hFj2sEpwZc2+tLwRaNoLgIvsRQMpy8IAAAAASUVORK5CYII="
              alt="cycle icon"
            />
            {"   "}
            학습 주기 설정
          </MenuList>

          <MenuList href="/" onClick={() => this.closeMenu()}>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAJHSURBVEhL7ZJLa1NhEIaPO1cWEXdFtLVpiTX2smhsBTXGFBqsNdeamBovTZSCpKtIEVxYMILoRgp1EyweLbSIpVIxESTUhUj8Ay6a+hdcyzt+E+b49VgNJmbZB15O5puZZzYxdvhvWqeQb52icv1BXhS16UhhpiON7440ivWmupdCVlR/pucK9h+7hvWjN2lvo+F99ohyO0MJOuCewBspqwxOwHc8SeFacSfRJ+MG77NHyt+hXafiOOOJ2Y944gidjlGqVrwX6YSMG7zPHvbJk2Ykgjsq7/0R+xGLkSgl/VEqW+FaWjZ4v+qJYkaeNKEgzHAQD0IBfFO/57dkLhymHp6JXEB3JEBe/nLN79y3zav9qkf5eMbGpVGYifN4lBiDIxagNiuXx6hfvX9RwhY1M54YpRx/ueZ37m+d533Vf8w+UWvSfpjXz+GQlDZUL5TyY3nST14rXPO7jNhgD/uk1GSGYd7y/vVfYWTOIpQZppyVaR+C0toGe9gnpea2B2a2xpF6YA/7pNTcOwnz7lBzjrCHfVJqHg7CzDXpCHvYJ6XmyQDM+f7mHGEP+6TU5Ptgzt1A72wJX+9/oIPy3BDP1BH2SalZdMFcnIZ7oUC0UEAl//bfD7104alK0coLF3rZJ23NyhGYa+NwlVbxo7RKpL6V4ivsk3ZNXnfj6ooTWStrTjjZJ21N0YHZYifiG0sY2Fii8OYygpU87ZZ2Td51wVfopPCvdGGSfdLWlNuoZb0dz1U+f2yncqPhffZ8Oow9ot6hHgzjJ9v9+I/N0TR6AAAAAElFTkSuQmCC"
              alt="deck mange icon"
            />
            {"   "}
            카드 덱 관리
          </MenuList>

          <MenuList href="/" onClick={() => this.closeMenu()}>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAJtSURBVEhL7Y/fS9NRGMZXdBFlhUEX3XwzY4KbLmS6woVLG/6akCSmyDZT3NyKnHWj1YUXu9mFQkQg0oUZHUrtotyXosKt2IUIQpddeLH+gMD+guftPXXsWM7c5q0feHh5z3PO83y/ln2K5uRtHDeiVLpVp25SibL3TnkEI6zP5VFa+EsR+nQ2irvq2t6wD0HYwmSoVTNBB6uGkGF/0h6iRC5VhRCvHIZVvdiZ2n4IZyBHCVM/iGOuIBprB8ibS3VBXOf3SXV9Zzx+CPfWEv6DS0E4GvvIuZsuB+Bp8OPLn7Mg7BYLHVBJmtZeiI5uXdLag8d89rKtFzOFit+9buvBfRWl6eqC6N5Scq0LGd5PqLUgZI7MU6vG3wkR6Phd0uejUv9VrORbwvdK/J20tqn+TnLKPGVrQj6IMJfwfBRqRzrcjo2wN7+SCQ8dCvnIu6lhH6wyT9maWAvEiJeMWDPMMQ4fbUZGTmX/Fy45PNpCiU2NeFAl85StGW+C4FCDp3mvCenxK9jIt+RfVM72krgHIuEmI94AM96IMzxXEkWW/MrhPLVqJushHrI55YY56UaMtZ5wFlcic2SeWjXTLogZJxnTdTCnLyDGc533gkvG0lQ2dQPVMk8daZ7WQMxxyVwNTBnOe6bQktl3VPbkI7Kzd3BR5qljzbwDz1+cp7L5apisNGvjmQNHlb0raS5YTiKbMomSw3DJPGVpzEo8WLJhIGmD+daOc7yvKisvsouIZF9R4tsibiUrMWjaaFxZmvf81Skr3qQq6AfP78tWfE1ZaaFgVeADa0nmqejtrJ2mIxmDSouVfK+i9ikGi+UnOyTZQJoxT9oAAAAASUVORK5CYII="
              alt="media manage icon"
            />
            {"  "}
            미디어 관리
          </MenuList>

          <MenuList href="/" onClick={() => this.closeMenu()}>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAJmSURBVEhL7ZPtS1NhGMaPlWEZvRAEURD6IWKW0zanK9txHyq2ofm2uXR1tprDCdHLcBBkghFOP7VqQdC+CLpe/NAKpSWDNLC3SdTH9H/oH4jr7jl2t3HaMrGv+8HN/VzXfT3Pw8PhSEWK5GEIUGllEJcr+vC2sg/vxXpe1fuvYgtH/o8DCpVV+TF7uBe3dT7oDgbokLh0q9Ah1RfrHRxdPyaFInVeXDP4EDb68ProBVh5JNUrcJsUxPQK7axXKCByY0KHTR5UcOTfyDJtkj2Ukc9Ro6UHCUmiEh5lkT1YlHvwRdQlSzesTR5cXPG60cuR1XF0Yp/dhWd2NzyOszCxrcHRRc7WVuxW1/YutNvcmG9xwSL2pW0uHF8JrUZbG/Y62/GSZZZAhkqvLEBRO1tZxJ49nR1419GBY6JPsV0IKjnfDJe3BQ+9zfje76RtPFhh+A1uDc8RqZ0tDd4z8PvaoFdasMjWn1BJ0IZJUSP9dqoJOqhSkamMh9K9WZjvp/EjliZSu6p5pCF0EuXijDmWWkKn4QqdwihLDeMplE+msJxIEf0uVas+R7KIS5pFzQ4N0Qa2cty0IjZoJQNLDTMz2J6aRvjVNL6lpol+dYRVnyMaBpvw4IZMXpY5Io0YG7Xk/oVCfExi4lOSSO1sFWTEgtrICcRZ5oiaURutF8/U0Wa28lh6AvPyFAXUzlZBog3w323AAEstcSN8oj48MmIobqTAusqAO2J/erw6/3tlmThCuxI1+JrQY+BxDTnXXLVwT+qxlKhG11MnbeTj/s6LKtQ912EhqaPMmqsKn5M6XOcjihSRpJ9pQIz25cFjYQAAAABJRU5ErkJggg=="
              alt="sync icon"
            />
            {"  "}
            동기화
          </MenuList>
        </Menu>
        <Grid
          p={4}
          display="flex"
          gridTemplateColumns="repeat(auto-fill, 256px)"
          gridAutoRows="max-content"
          gridAutoColumns="max-content"
          gridGap="4rem"
          justifyContent="center"
        >
          {apples.map(apple => (
            <FlashCard
              key={apple.id}
              src={apple.image}
              title={apple.name}
              menuToggle={this.menuToggle}
            />
          ))}
          <AddCard />
        </Grid>
      </>
    );
  }
}

export default FlashCardPage;
