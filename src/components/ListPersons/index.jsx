import { FullName, Email, Information, Person } from "./style"

const Part1 = ({ data }) => {
    return(
      <ul>
        {data.map((item) => {
            return(         
                <Person key={item.login.uuid}>
                    <img src={ item.picture.medium } alt='img' />
                    <Information>
                      <FullName>{ item.name.first } { item.name.last }</FullName>
                      <Email>{ item.email }</Email>
                    </Information>
                </Person>        
            )
        })}
      </ul>
    )
}

export default Part1