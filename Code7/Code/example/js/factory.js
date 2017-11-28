app.factory("myfactory", () => {
    var object = {};
    object.compute = (salary) => {
        var hra = parseInt(0.30 * salary);
        var da = parseInt(0.20 * salary);
        var ta = parseInt(0.10 * salary);
        var pf = parseInt(0.05 * salary);
        var gross_sal = parseInt(salary) + hra + da + ta - pf;
        var tax = 0.10 * gross_sal;
        var total = gross_sal - tax;
        var result = {
            hra,
            da,
            ta,
            pf,
            gross_sal,
            tax,
            total
        };

        return result;
    }
    return object;
});