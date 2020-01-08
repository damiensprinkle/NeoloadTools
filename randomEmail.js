function evaluate() {
    return new function() {
        var email = ["gmail", "yahoo" , "hotmail" , "menard-inc", "aol"];
        var tld = [".net", ".com", ".us", ".gov"];
        var start = Math.random().toString(36).substring(7);
        var emailProvider = email[Math.floor(Math.random() * email.length)];
        var domain = tld[Math.floor(Math.random() * tld.length)];
            this.emailGenerator = start + Math.floor(Math.random() * 10000000000) + 1 + "@" + emailProvider + domain;
    }
}
