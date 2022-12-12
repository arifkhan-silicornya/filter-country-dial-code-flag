# filter-country-dial-code-flag
Node package. All Country List with country code, dial Code , flag, name, Country code. And a filter system by dial code and country name and country code



![npm](https://img.shields.io/npm/v/filter-country-dial-code-flag)
![npm](https://img.shields.io/npm/l/filter-country-dial-code-flag?color=002350)
![npm](https://img.shields.io/bundlephobia/minzip/filter-country-dial-code-flag/1.0.1)




## Install it via npm

```shell
npm i filter-country-dial-code-flag
```

## Require the Module

```shell
const allData = require('filter-country-dial-code-flag')
```

## To use

```shell
const data = allData(); // All Data
const data = allData('bd'); // Filter by iso code
const data = allData('Bangladesh'); // Filter by Country Name

console.log(data);

```

## Output

```shell
[
  { name: 'Afghanistan', dial_code: '+93', code: 'AF', flag: '🇦🇫' },
  { name: 'Albania', dial_code: '+355', code: 'AL', flag: '🇦🇱' },
  { name: 'Algeria', dial_code: '+213', code: 'DZ', flag: '🇩🇿' },
  {
    name: 'AmericanSamoa',
    dial_code: '+1684',
    code: 'AS',
    flag: '🇦🇸'
  },
  { name: 'Andorra', dial_code: '+376', code: 'AD', flag: '🇦🇩' },
  { name: 'Angola', dial_code: '+244', code: 'AO', flag: '🇦🇴' },
  { name: 'Anguilla', dial_code: '+1264', code: 'AI', flag: '🇦🇮' },
  { name: 'Antarctica', dial_code: '+672', code: 'AQ', flag: '🇦🇶' },
  {
    name: 'Antigua and Barbuda',
    dial_code: '+1268',
    code: 'AG',
    flag: '🇦🇬'
  },
  { name: 'Argentina', dial_code: '+54', code: 'AR', flag: '🇦🇷' },
  { name: 'Armenia', dial_code: '+374', code: 'AM', flag: '🇦🇲' },
  { name: 'Aruba', dial_code: '+297', code: 'AW', flag: '🇦🇼' },
  {
    name: 'Australia',
    dial_code: '+61',
    code: 'AU',
    preferred: true,
    flag: '🇦🇺'
  },
  { name: 'Austria', dial_code: '+43', code: 'AT', flag: '🇦🇹' },
  { name: 'Azerbaijan', dial_code: '+994', code: 'AZ', flag: '🇦🇿' },
  { name: 'Bahamas', dial_code: '+1242', code: 'BS', flag: '🇧🇸' },
  { name: 'Bahrain', dial_code: '+973', code: 'BH', flag: '🇧🇭' },
  { name: 'Bangladesh', dial_code: '+880', code: 'BD', flag: '🇧🇩' },
  { name: 'Barbados', dial_code: '+1246', code: 'BB', flag: '🇧🇧' },
  { name: 'Belarus', dial_code: '+375', code: 'BY', flag: '🇧🇾' },
  { name: 'Belgium', dial_code: '+32', code: 'BE', flag: '🇧🇪' },
  { name: 'Belize', dial_code: '+501', code: 'BZ', flag: '🇧🇿' },
  { name: 'Benin', dial_code: '+229', code: 'BJ', flag: '🇧🇯' },
  { name: 'Bermuda', dial_code: '+1441', code: 'BM', flag: '🇧🇲' },
  { name: 'Bhutan', dial_code: '+975', code: 'BT', flag: '🇧🇹' },
  {
    name: 'Bolivia, Plurinational State of',
    dial_code: '+591',
    code: 'BO',
    flag: '🇧🇴'
  },
  {
    name: 'Bosnia and Herzegovina',
    dial_code: '+387',
    code: 'BA',
    flag: '🇧🇦'
  },
  { name: 'Botswana', dial_code: '+267', code: 'BW', flag: '🇧🇼' },
  { name: 'Brazil', dial_code: '+55', code: 'BR', flag: '🇧🇷' },
  {
    name: 'British Indian Ocean Territory',
    dial_code: '+246',
    code: 'IO',
    flag: '🇮🇴'
  },
  {
    name: 'Brunei Darussalam',
    dial_code: '+673',
    code: 'BN',
    flag: '🇧🇳'
  },
  { name: 'Bulgaria', dial_code: '+359', code: 'BG', flag: '🇧🇬' },
  { name: 'Burkina Faso', dial_code: '+226', code: 'BF', flag: '🇧🇫' },
  { name: 'Burundi', dial_code: '+257', code: 'BI', flag: '🇧🇮' },
  { name: 'Cambodia', dial_code: '+855', code: 'KH', flag: '🇰🇭' },
  { name: 'Cameroon', dial_code: '+237', code: 'CM', flag: '🇨🇲' },
  { name: 'Canada', dial_code: '+1', code: 'CA', flag: '🇨🇦' },
  { name: 'Cape Verde', dial_code: '+238', code: 'CV', flag: '🇨🇻' },
  {
    name: 'Cayman Islands',
    dial_code: '+345',
    code: 'KY',
    flag: '🇰🇾'
  },
  {
    name: 'Central African Republic',
    dial_code: '+236',
    code: 'CF',
    flag: '🇨🇫'
  },
  { name: 'Chad', dial_code: '+235', code: 'TD', flag: '🇹🇩' },
  { name: 'Chile', dial_code: '+56', code: 'CL', flag: '🇨🇱' },
  { name: 'China', dial_code: '+86', code: 'CN', flag: '🇨🇳' },
  {
    name: 'Christmas Island',
    dial_code: '+61',
    code: 'CX',
    flag: '🇨🇽'
  },
  {
    name: 'Cocos (Keeling) Islands',
    dial_code: '+61',
    code: 'CC',
    flag: '🇨🇨'
  },
  { name: 'Colombia', dial_code: '+57', code: 'CO', flag: '🇨🇴' },
  { name: 'Comoros', dial_code: '+269', code: 'KM', flag: '🇰🇲' },
  { name: 'Congo', dial_code: '+242', code: 'CG', flag: '🇨🇬' },
  {
    name: 'Congo, The Democratic Republic of the',
    dial_code: '+243',
    code: 'CD',
    flag: '🇨🇩'
  },
  { name: 'Cook Islands', dial_code: '+682', code: 'CK', flag: '🇨🇰' },
  { name: 'Costa Rica', dial_code: '+506', code: 'CR', flag: '🇨🇷' },
  {
    name: "Cote d'Ivoire",
    dial_code: '+225',
    code: 'CI',
    flag: '🇨🇮'
  },
  { name: 'Croatia', dial_code: '+385', code: 'HR', flag: '🇭🇷' },
  { name: 'Cuba', dial_code: '+53', code: 'CU', flag: '🇨🇺' },
  { name: 'Cyprus', dial_code: '+357', code: 'CY', flag: '🇨🇾' },
  {
    name: 'Czech Republic',
    dial_code: '+420',
    code: 'CZ',
    flag: '🇨🇿'
  },
  { name: 'Denmark', dial_code: '+45', code: 'DK', flag: '🇩🇰' },
  { name: 'Djibouti', dial_code: '+253', code: 'DJ', flag: '🇩🇯' },
  { name: 'Dominica', dial_code: '+1767', code: 'DM', flag: '🇩🇲' },
  {
    name: 'Dominican Republic',
    dial_code: '+1849',
    code: 'DO',
    flag: '🇩🇴'
  },
  { name: 'Ecuador', dial_code: '+593', code: 'EC', flag: '🇪🇨' },
  { name: 'Egypt', dial_code: '+20', code: 'EG', flag: '🇪🇬' },
  { name: 'El Salvador', dial_code: '+503', code: 'SV', flag: '🇸🇻' },
  {
    name: 'Equatorial Guinea',
    dial_code: '+240',
    code: 'GQ',
    flag: '🇬🇶'
  },
  { name: 'Eritrea', dial_code: '+291', code: 'ER', flag: '🇪🇷' },
  { name: 'Estonia', dial_code: '+372', code: 'EE', flag: '🇪🇪' },
  { name: 'Ethiopia', dial_code: '+251', code: 'ET', flag: '🇪🇹' },
  {
    name: 'Falkland Islands (Malvinas)',
    dial_code: '+500',
    code: 'FK',
    flag: '🇫🇰'
  },
  {
    name: 'Faroe Islands',
    dial_code: '+298',
    code: 'FO',
    flag: '🇫🇴'
  },
  { name: 'Fiji', dial_code: '+679', code: 'FJ', flag: '🇫🇯' },
  { name: 'Finland', dial_code: '+358', code: 'FI', flag: '🇫🇮' },
  { name: 'France', dial_code: '+33', code: 'FR', flag: '🇫🇷' },
  {
    name: 'French Guiana',
    dial_code: '+594',
    code: 'GF',
    flag: '🇬🇫'
  },
  {
    name: 'French Polynesia',
    dial_code: '+689',
    code: 'PF',
    flag: '🇵🇫'
  },
  { name: 'Gabon', dial_code: '+241', code: 'GA', flag: '🇬🇦' },
  { name: 'Gambia', dial_code: '+220', code: 'GM', flag: '🇬🇲' },
  { name: 'Georgia', dial_code: '+995', code: 'GE', flag: '🇬🇪' },
  { name: 'Germany', dial_code: '+49', code: 'DE', flag: '🇩🇪' },
  { name: 'Ghana', dial_code: '+233', code: 'GH', flag: '🇬🇭' },
  { name: 'Gibraltar', dial_code: '+350', code: 'GI', flag: '🇬🇮' },
  { name: 'Greece', dial_code: '+30', code: 'GR', flag: '🇬🇷' },
  { name: 'Greenland', dial_code: '+299', code: 'GL', flag: '🇬🇱' },
  { name: 'Grenada', dial_code: '+1473', code: 'GD', flag: '🇬🇩' },
  { name: 'Guadeloupe', dial_code: '+590', code: 'GP', flag: '🇬🇵' },
  { name: 'Guam', dial_code: '+1671', code: 'GU', flag: '🇬🇺' },
  { name: 'Guatemala', dial_code: '+502', code: 'GT', flag: '🇬🇹' },
  { name: 'Guernsey', dial_code: '+44', code: 'GG', flag: '🇬🇬' },
  { name: 'Guinea', dial_code: '+224', code: 'GN', flag: '🇬🇳' },
  {
    name: 'Guinea-Bissau',
    dial_code: '+245',
    code: 'GW',
    flag: '🇬🇼'
  },
  { name: 'Guyana', dial_code: '+595', code: 'GY', flag: '🇬🇾' },
  { name: 'Haiti', dial_code: '+509', code: 'HT', flag: '🇭🇹' },
  {
    name: 'Holy See (Vatican City State)',
    dial_code: '+379',
    code: 'VA',
    flag: '🇻🇦'
  },
  { name: 'Honduras', dial_code: '+504', code: 'HN', flag: '🇭🇳' },
  { name: 'Hong Kong', dial_code: '+852', code: 'HK', flag: '🇭🇰' },
  { name: 'Hungary', dial_code: '+36', code: 'HU', flag: '🇭🇺' },
  { name: 'Iceland', dial_code: '+354', code: 'IS', flag: '🇮🇸' },
  {
    name: 'India',
    dial_code: '+91',
    code: 'IN',
    preferred: true,
    flag: '🇮🇳'
  },
  { name: 'Indonesia', dial_code: '+62', code: 'ID', flag: '🇮🇩' },
  {
    name: 'Iran, Islamic Republic of',
    dial_code: '+98',
    code: 'IR',
    flag: '🇮🇷'
  },
  { name: 'Iraq', dial_code: '+964', code: 'IQ', flag: '🇮🇶' },
  ... 141 more items
]


## Parameters 

## License
The MIT License (MIT)

Copyright (c)2022 arifkhan-silicornya

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:


THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.