mod main;

#[cfg(test)]
mod tests_validate_password {
    use crate::main;

    #[test]
    fn should_allows_valid_password() {
        let result = main::validate_password("Password_1");
        assert_eq!(result, true)
    }

    #[test]
    fn should_not_allow_password_with_less_than_8_characters() {
        let result = main::validate_password("Pass_1");
        assert_eq!(result, false)
    }

    #[test]
    fn should_not_allow_password_without_uppercase() {
        let result = main::validate_password("password_1");
        assert_eq!(result, false)
    }

    #[test]
    fn should_not_allow_password_without_lowercase() {
        let result = main::validate_password("PASSWORD_1");
        assert_eq!(result, false)
    }

    #[test]
    fn should_not_allow_password_without_number() {
        let result = main::validate_password("Password_");
        assert_eq!(result, false)
    }
}
