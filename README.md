# koishi-plugin-cotton-moe

[![npm](https://img.shields.io/npm/v/koishi-plugin-cotton-moe?style=flat-square)](https://www.npmjs.com/package/koishi-plugin-cotton-moe)

~~是的我还没发npm包~~

伪棉花糖插件。写给一个不能说的平台。

也可以说是，对官方文档里提到的所有平台，均不支持。（我没测）

非常简单粗暴，目前用的时候不能打开 database。
这点可能后续会更新。


有写一点页面设置但是鸽了（~~是的我在代码里拉屎了,对不起~~）

1. 设置`koishi.yml`
   
   配置示例
    ```yaml
    # koishi.yml
    cotton-moe:0w0mm2:
    - rules:
        - - "a "
            - "群号1"
        - - "b "
            - "群号2"
    ```

2. 给机器人私发消息
   
   例如：
   ```
   a 测试测试
   ```
3. 机器人在对应的群号里发消息
   
   例如：
   ```
    聆听到[超绝可爱的小男娘]的祷告了哦～🌸
    ---
    测试测试
   ```
