import React from 'react';
import { Typography } from '@material-ui/core';
import { AuthenticatedTemplate } from '@azure/msal-react';

export default class Home extends React.Component {
    render() {

        return (
            <>
                <Typography variant='h2'>Hello World out there!</Typography>
                <AuthenticatedTemplate>
                    <Typography paragraph>Lorem ipsum dolor sit amet. Qui vero nostrum et necessitatibus velit ea illo animi et dolorum sunt ea architecto laborum? Sit dicta culpa qui Quis voluptatem id minima commodi et consequuntur nobis est dignissimos repellendus! Sit consectetur tempora aut beatae beatae in laboriosam corrupti et labore perspiciatis. Quo cupiditate consequatur est dolores dolor ad natus repellendus qui aliquam adipisci id earum dolorem ut officiis blanditiis qui culpa debitis. Quo consequatur modi hic nihil autem et galisum consequatur. 33 suscipit aliquam et voluptatum quos est fugiat quibusdam sed doloremque quia ut voluptas itaque cum animi quaerat aut nulla veniam! Qui dolorum perspiciatis non iusto eveniet et magnam rerum et nesciunt dignissimos qui nisi obcaecati 33 nostrum magnam 33 doloribus voluptatum. Rem mollitia facilis hic voluptas quia sit quia maiores qui aliquid quod At voluptatum adipisci a distinctio mollitia. Quo consequatur quam et sunt unde aut dolor eius sit nobis temporibus ad eius cupiditate.</Typography>
                </AuthenticatedTemplate>
            </>
        );
    }
}
