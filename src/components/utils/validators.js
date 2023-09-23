

export function validatorFunc(str, strTp) {


    if (!str || str.length < 2) {

        switch (strTp) {
            case 'name': return 'Please Write Your Name Again'

            case 'password': return 'Please Write Your Password Again'

            case 'email': return 'Please Write Your Email Again'


            default: return
        }



    }

    return false
}