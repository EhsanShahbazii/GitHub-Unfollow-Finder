# GitHub-Unfollow-Finder
با این کد میشه لیست فالوور هات رو توی گیت هاب پیدا کنی. هر وقت دیدی کسی آنفالو کرده میخوای پیداش کنی این کد میتونه کمکت کنه (هنوز تکمیل نشده)

### چطور ران کنیم؟
خیلی راحت اگه نود‌(Node) روی سیستمتون نصب نیست اول نصب کنید بعد پروژه رو کلون کنید. کافیه dependency ها رو نصب کنید.
```console
npm install
```

### ورودی برنامه نام کاربری گیت هابتون رو وارد می کنید نه اسم خودتون!به طور مثال (EhsanShahbazii)
```console
Hi. I can find who unfollow you in github. please first create your followers list, 
then send list path for me and i will find who unfollow you easily.

Please enter your username: EhsanShahbazii
```
### خروجی برنامه روی سیستم شما فایل `followers.json` ذخیره میکنه که لیست فالوور هاتون هست.
### اطلاعات هر شخص عبارت است از:
- نام
- نام کاربری
- لینک پروفایل گیت هاب

### خروجی کوچک شده
```json
  {
    "name": "Neda",
    "username": "Nedagz",
    "profileLink": "https://github.com/Nedagz"
  },
  {
    "name": "maniraad",
    "username": "maniraad",
    "profileLink": "https://github.com/maniraad"
  },
```

### تسک های برنامه
- [x] تهیه لیست فالوور ها
- [ ] تهیه لیست آن فالوور ها
- [ ] رابط کاربری
