
const debtToGDP = {
    "Definitions": {
        "Economy": "An economy is the large set of inter-related production and consumption activities that aid in determining how scarce resources are allocated. In an economy, the production and consumption of goods and services are used to fulfill the needs of those living and operating within it.",                     

        "Economic Indicator": "An economic indicator is a statistic about an economic activity. Economic indicators allow analysis of economic performance and predictions of future performance. Economic indicators include various indices, earnings reports, and economic summaries.",

        "Economic Indicator Examples": "Examples of economic indicators include the unemployment rate, the inflation rate, the gross domestic product (GDP), and the debt to GDP ratio.",

        "Economic Indicator Types": "Economic indicators can be classified into three types: leading, lagging, and coincident. Leading indicators are used to predict changes in the economy. Lagging indicators are used to confirm changes in the economy. Coincident indicators are used to confirm the current state of the economy.",

        "Economic Indicator Importance": "Economic indicators are important because they provide insights into the health of an economy. They can be used to predict future economic performance and to make decisions about monetary policy.",

        "Debt": "Debt refers to the amount of money borrowed by one party from another. In the context of national economics, it is the total amount of money that a government owes to external creditors and domestic lenders.",

        "Public Debt": "This is the total amount of money that a government owes to external creditors and domestic lenders. It's accumulated through the issuance of securities like government bonds and notes.",

        "External Debt": "This is the total amount of money that a country owes to foreign creditors. It's the portion of a country's debt that was borrowed from foreign lenders including commercial banks, governments, or international financial institutions.",

        "Domestic Debt": "This is the total amount of money that a country owes to domestic lenders. It's the portion of a country's debt that was borrowed from domestic lenders including commercial banks, governments, or other financial institutions.",

        "GDP": "GDP (Gross Domestic Product) is a comprehensive measure used to assess the economic performance of a country. It represents the total monetary value of all goods and services produced within a nation's borders over a specific time period (usually one year).",

        "Debt to GDP Ratio": "The Debt to GDP ratio is a crucial economic indicator that provides insights into a country's financial health. This ratio compares a nation's total debt to its GDP, offering a perspective on the country's ability to generate enough economic output to pay off its debt.",

        "Debt to GDP Ratio Formula": "Debt to GDP Ratio = (Total Debt / GDP) x 100%",

        "Debt to GDP Ratio Example": "If a country has a total debt of $1 trillion and a GDP of $2 trillion, its debt to GDP ratio would be 50%.",

        "Debt to GDP Ratio Interpretation": "A debt to GDP ratio of 50% means that a country's debt is half the size of its economy. This is considered a healthy ratio, as it indicates that a country is able to generate enough economic output to pay off its debt. However, a debt to GDP ratio of 100% or higher is considered unhealthy, as it indicates that a country's debt is larger than its economy. This means that a country would have to use more than a year's worth of economic output to pay off its debt.",

        "Debt to GDP Ratio Limitations": "The debt to GDP ratio is a useful indicator, but it has its limitations. For example, it doesn't take into account a country's ability to pay off its debt. A country with a high debt to GDP ratio may be able to pay off its debt if it has a strong economy and a low debt to GDP ratio may not be able to pay off its debt if it has a weak economy.",

        "Debt to GDP Ratio Data Source": "The World Bank's World Development Indicators database is a comprehensive source of data on the world's economies. It contains data on over 200 countries and territories, including GDP, population, inflation, unemployment, and more.",


        
    },
    "World": {
        "Average": "247%",
        "Highest": {
            "Country": "Venezuela",
            "Ratio": "350%"
        },
        "Lowest": {
            "Country": "Brunei",
            "Ratio": "3.2%"
        }
    },
    "US": {
        "2022_Q1": "117.32%",
        "2022_Q2": "119.67%",
        "2022_Q3": "118.98%",
        "2022_Q4": "118.97%",
        "2023_Q1": "117.32%",
        "2023_Q2": "119.47%"
    },
    "China": {
        "2022_Q1": "76.5%",
        "2022_Q2": "77.1%",
        "2022_Q3": "78.7%",
        "2022_Q4": "80.3%",
        "2023_Q1": "81.35%",
        "2023_Q2": "82.43%"
    },
    "Japan": {
        "2022_Q1": "260.5%",
        "2022_Q2": "262.20%",
        "2022_Q3": "263.05%",
        "2022_Q4": "263.47%",
        "2023_Q1": "263.68%",
        "2023_Q2": "263.90%"
    },
    "Germany": {
        "2022_Q1": "66.53%",
        "2022_Q2": "67.16%",
        "2022_Q3": "66.47%",
        "2022_Q4": "64.4%",
        "2023_Q1": "62.33%",
        "2023_Q2": "60.94%"
    },

    // get the debt to GDP ratio for a specific country and quarter
    getDebtToGDP: function(country, quarter) {
        if (this[country] && this[country][quarter]) {
            return this[country][quarter];
        } else {
            return 'Data not available';
        }
    },
    // compare the debt to GDP ratio of two countries
    compareDebtToGDP: function(country1, country2, quarter) {
        const ratio1 = this.getDebtToGDP(country1, quarter);
        const ratio2 = this.getDebtToGDP(country2, quarter);

        if (ratio1 === 'Data not available' || ratio2 === 'Data not available') {
            return 'Comparison not possible due to missing data';
        } else if (ratio1 > ratio2) {
            return `${country1} has a higher debt to GDP ratio than ${country2} in ${quarter}`;
        } else if (ratio1 < ratio2) {
            return `${country1} has a lower debt to GDP ratio than ${country2} in ${quarter}`;
        } else {
            return `${country1} and ${country2} have the same debt to GDP ratio in ${quarter}`;
        }
    },

    // check if the debt to GDP ratio of a country is above a certain threshold
    isAboveThreshold: function(country, quarter, threshold = 100) { // set threshold
        if (!this[country][quarter]) return false;
        return parseFloat(this[country][quarter]) > threshold;
    }


};



console.log(debtToGDP.getDebtToGDP('US', '2023_Q2'));  // Output: 119.47%
console.log(debtToGDP.compareDebtToGDP('US', 'Japan', '2023_Q2'));  // Output: US has a higher debt to GDP ratio than Japan in 2023_Q2


