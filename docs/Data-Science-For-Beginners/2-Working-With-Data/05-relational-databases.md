---
title: 05-关系数据库
---

# 使用数据: 关系数据库

| ![ Sketchnote by [(@sketchthedocs)](https://sketchthedocs.dev) ](../../../images/05-RelationalData.png) |
| :-----------------------------------------------------------------------------------------------------: |
|      Working With Data: Relational Databases - _Sketchnote by [@nitya](https://twitter.com/nitya)_      |

您过去可能使用电子表格来存储信息。您有一组行和列，其中行包含信息（或数据），列描述信息（有时称为元数据）。关系数据库基于表中的列和行的核心原则构建，允许您将信息分布在多个表中。这使您可以处理更复杂的数据，避免重复，并灵活地浏览数据。让我们探讨一下关系数据库的概念。

## [Pre-lecture quiz](https://purple-hill-04aebfb03.1.azurestaticapps.net/quiz/8)

## 一切开始于表格

关系型数据库的核心是表格。就像电子表格一样，表格是由列和行组成的集合。行包含我们希望处理的数据或信息，比如城市的名称或降雨量。列描述它们所存储的数据。

让我们通过创建一个表格来存储有关城市的信息来开始我们的探索。我们可以从它们的名称和国家开始。你可以将这些信息存储在一个表格中，如下所示：

| City     | Country       |
| -------- | ------------- |
| Tokyo    | Japan         |
| Atlanta  | United States |
| Auckland | New Zealand   |

注意到列名**city**, **country** 和 **population**描述了被存储的数据，每一行都包含一个城市的信息。

## 单表的缺点

很可能，上面的表格对你来说比较熟悉。让我们开始向我们不断增长的数据库中添加一些额外的数据 - 年降雨量（以毫米为单位）。我们将关注 2018 年、2019 年和 2020 年。如果我们要为东京添加这些数据，可能会是这样的：

| City  | Country | Year | Amount |
| ----- | ------- | ---- | ------ |
| Tokyo | Japan   | 2020 | 1690   |
| Tokyo | Japan   | 2019 | 1874   |
| Tokyo | Japan   | 2018 | 1445   |

你将从我们的表格中注意到什么信息？你可能已经注意到我们一遍又一遍地重复城市的名称和国家。这样做可能会占用大量的存储空间，并且没有必要多次复制相同的数据。毕竟，我们只对东京的一个名称感兴趣。

好的，让我们试试别的方式，让我们给每年都添加新的列:

| City     | Country       | 2018 | 2019 | 2020 |
| -------- | ------------- | ---- | ---- | ---- |
| Tokyo    | Japan         | 1445 | 1874 | 1690 |
| Atlanta  | United States | 1779 | 1111 | 1683 |
| Auckland | New Zealand   | 1386 | 942  | 1176 |

虽然这样可以避免行重复，但它也增加了一些其他挑战。每当有一个新的年份时，我们需要修改表格的结构。此外，随着数据的增长，将年份作为列会使得检索和计算值变得更加复杂。

这就是为什么我们需要多个表格和关联。通过拆分我们的数据，我们可以避免重复，并在处理数据时更加灵活。

## 关系的概念

让我们回到我们的数据，并确定我们想要如何拆分数据。我们知道我们想要存储城市的名称和国家，所以这可能最适合放在一个表格中。

| City     | Country       |
| -------- | ------------- |
| Tokyo    | Japan         |
| Atlanta  | United States |
| Auckland | New Zealand   |

在创建下一个表格之前，我们需要找出如何引用每个城市。我们需要某种形式的标识符，即 ID 或（在技术数据库术语中）主键。主键是用于标识表格中特定行的值。（例如，我们可以使用城市的名称），但它几乎总是一个数字或其他标识符。们不希望 id 发生任何更改，因为这会破坏关系。在大多数情况下，主键或 id 将是一个自动生成的数字。

> :exclamation: 主键通常缩写为 PK（Primary Key）。

### 城市 cities

| city_id | City     | Country       |
| ------- | -------- | ------------- |
| 1       | Tokyo    | Japan         |
| 2       | Atlanta  | United States |
| 3       | Auckland | New Zealand   |

> ✅ 你会注意到在本课程中我们将"id"和"primary key"这两个术语互换使用。这里介绍的概念适用于 DataFrame，你稍后会学习到。DataFrame 并不使用"primary key"这个术语，但你会注意到它们的行为方式非常相似。

创建了我们的城市表格后，让我们存储降雨量。我们可以使用 id 而不是完整的城市信息来避免重复。我们还应该确保新创建的表格也有一个`_id_`列，因为所有的表格都应该有一个 id 或主键。

### 降雨量 rainfall

| rainfall_id | city_id | Year | Amount |
| ----------- | ------- | ---- | ------ |
| 1           | 1       | 2018 | 1445   |
| 2           | 1       | 2019 | 1874   |
| 3           | 1       | 2020 | 1690   |
| 4           | 2       | 2018 | 1779   |
| 5           | 2       | 2019 | 1111   |
| 6           | 2       | 2020 | 1683   |
| 7           | 3       | 2018 | 1386   |
| 8           | 3       | 2019 | 942    |
| 9           | 3       | 2020 | 1176   |

请注意新创建的**rainfall**表格中的**city_id**列。该列包含引用**cities**表格中的 ID 的值。在关系数据的专业名词上，这被称为**外键**（foreign key），它是来自另一个表格的主键。你可以将其视为引用或指针。**city_id**为 1 表示引用了东京的数据。

> :exclamation: 外键经常简写为 FK （Foreign Key）。

## 检索数据

将我们的数据分成两个表格后，你可能想知道如何检索数据。如果我们使用的是关系型数据库，如 MySQL、SQL Server 或 Oracle，我们可以使用一种称为结构化查询语言（SQL）的语言。SQL 是一种用于在关系型数据库中检索和修改数据的标准语言。

要检索数据，你可以使用`SELECT`命令。在其核心，你**从(from)**包含它们的表格中**选择(select)**你想要查看的列。如果你只想显示城市的名称，你可以使用以下语句：

```sql
SELECT city
FROM cities;

-- Output:
-- Tokyo
-- Atlanta
-- Auckland
```

在`SELECT`子句中，你列出你要选择的列，而在`FROM`子句中，你列出你要选择的表格。

> :exclamation: SQL 语法是不区分大小写的，这意味着`select`和`SELECT`是相同的意思。SQL 语法是不区分大小写的，这意味着 select 和 SELECT 是相同的意思。

上面的查询将显示所有城市。假设我们只想显示新西兰的城市。我们需要一种过滤器。在 SQL 中，用于此目的的关键字是`WHERE`，意思是"在某个条件为真的情况下"。

```sql
SELECT city
FROM cities
WHERE country = 'New Zealand';

-- Output:
-- Auckland
```

## 连接数据

到目前为止，我们从单个表格中检索数据。现在我们想要从**cities**和**rainfall**两个表格中将数据合并在一起。通过`_joining_`来实现。你将在两个表格之间创建一个接缝，并将来自每个表格的列的值进行匹配。

在我们的示例中，我们将在**rainfall**表格中使用**city_id**列与 cities 表格中的**city_id**列进行匹配。这将使降雨量值与相应的城市匹配。我们将执行的连接类型是所谓的 `_inner_`(内/等值)连接，这意味着如果任何行与其他表中的任何内容不匹配，它们将不会显示。在我们的例子中，每个城市都有降雨量，所以所有内容都会显示出来。

让我们检索所有城市在 2019 年的降雨量。

我们将分步进行。第一步是通过指定接缝的列（如之前提到的**city_id**）将数据连接在一起。

```sql
SELECT cities.city
    rainfall.amount
FROM cities
    INNER JOIN rainfall ON cities.city_id = rainfall.city_id
```

我们已经突出显示了我们想要的两列，并且我们想要通过**city_id**将表格连接在一起。现在我们可以添加 `WHERE` 语句来筛选出只有 2019 年的数据。

```sql
SELECT cities.city
    rainfall.amount
FROM cities
    INNER JOIN rainfall ON cities.city_id = rainfall.city_id
WHERE rainfall.year = 2019

-- Output

-- city     | amount
-- -------- | ------
-- Tokyo    | 1874
-- Atlanta  | 1111
-- Auckland |  942
```

## 总结

关系型数据库的核心是将信息分割成多个表格，然后将其重新组合以进行显示和分析。这提供了高度的灵活性，可以进行计算和其他数据操作。你已经了解了关系型数据库的核心概念，以及如何在两个表格之间执行连接操作。

## 🚀 挑战

互联网上有许多可用的关系型数据库。你可以使用上面学到的技能来探索数据。

## Post-Lecture Quiz

## [Post-lecture quiz](https://purple-hill-04aebfb03.1.azurestaticapps.net/quiz/9)

## 回顾和自学

在[Microsoft Learn](https://docs.microsoft.com/learn?WT.mc_id=academic-77958-bethanycheum)这里有许多可供你继续探索 SQL 和关系数据库概念的资源

-   [关系数据库的概念](https://docs.microsoft.com//learn/modules/describe-concepts-of-relational-data?WT.mc_id=academic-77958-bethanycheum)
-   [使用 Transact-SQL 开始查询](https://docs.microsoft.com//learn/paths/get-started-querying-with-transact-sql?WT.mc_id=academic-77958-bethanycheum) (Transact-SQL is a version of SQL)
-   [在 Microsoft 学习 SQL 内容](https://docs.microsoft.com/learn/browse/?products=azure-sql-database%2Csql-server&expanded=azure&WT.mc_id=academic-77958-bethanycheum)

## 作业

[作业](assignment.md)
