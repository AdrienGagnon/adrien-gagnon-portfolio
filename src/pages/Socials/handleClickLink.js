export const handleClickLink = social => {
    if (social.mail) {
        window.open('mailto: adrien.gagnon25@outlook.com');
    } else {
        window.location.href = social.link;
    }
};
