const regExpDic = {
  email: /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/,
  password: /^[0-9a-zA-Z]{4,}$/,
  phone: /^[0-9]{10}$/,
  text: /^[a-zA-Z]{1,15}$/,
  date: /^(?:(?:(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00)))(\/|-|\.)(?:0?2\1(?:29)))|(?:(?:(?:1[6-9]|[2-9]\d)?\d{2})(\/|-|\.)(?:(?:(?:0?[13578]|1[02])\2(?:31))|(?:(?:0?[1,3-9]|1[0-2])\2(29|30))|(?:(?:0?[1-9])|(?:1[0-2]))\2(?:0?[1-9]|1\d|2[0-8]))))$/,
}

/**
 * Function validat. Check input on RegExp provided in regExpDictionary by input data-required type
 * @params {HtmlInputElement} el
 * @return {Boolean} - Return true if input valid or dosen't has data-required attr
 */

export function validate(el) {
  const regExpName = el.dataset.required

  if (!regExpDic[regExpName]) return true

  return regExpDic[regExpName].test(el.value)
}
