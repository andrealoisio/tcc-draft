import './footer.css'
import React from 'react'; 
import CopyrightIcon from '@mui/icons-material/Copyright';
import MediaQuery from 'react-responsive'


export default function Header() {
    return(
        <div>
            <MediaQuery minWidth="800px">
                {(matches) =>
                    matches
                    ?<h2><CopyrightIcon /> 2022 - Desenvolvido por Daniel Castilho e André Mendes </h2>
                    :<h4><CopyrightIcon fontSize="small" /> 2022 - Desenvolvido por Daniel Castilho e André Mendes </h4>
                }
            </MediaQuery>
        </div>
    )
}

