package com.example.backend.selenium;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.opera.OperaDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class SeleniumTest {
    private WebDriver driver;

    private String alertMessage;
    private String id;

    @BeforeAll
    public static void setupDriver() {
        WebDriverManager.operadriver().setup();
    }

    @BeforeEach
    void setUp() {
        driver = new OperaDriver();
    }

//    @AfterEach
//    void tearDown() {
//        driver.quit();
//    }

    @Test
    void displaysContactWhenRegistere() {

        driver.get("http://localhost:3000");
        driver.findElement(By.id("fornecedores")).click();
        driver.findElement(By.id("create")).click();
        driver.findElement(By.id("outlined-required")).sendKeys("Selenium");
        driver.findElement(By.id("salvar")).click();
        WebDriverWait wait = new WebDriverWait(driver, 15);
        Alert alert = wait.until(ExpectedConditions.alertIsPresent());
        alert.accept();
        driver.navigate().refresh();
        Assertions.assertThat(driver.findElement(By.id("nome")).isDisplayed());
        String text = driver.findElement(By.id("nome")).getText();
        Assertions.assertThat(text).isEqualTo("Nome: Selenium");

//        Selenide.$(By.name("id")).shouldBe(Condition.visible);

//        driver.findElement(By.id("cadastrar")).click();
//        driver.findElement(By.name("name")).sendKeys("Selenide");
//        driver.findElement(By.name("email")).sendKeys("Selenide@teste.com");
//        driver.findElement(By.name("phone")).sendKeys("+1 666");
//        driver.findElement(By.id("cadastrar")).click();
//        Alert alert = driver.switchTo().alert();
//        alertMessage = alert.getText();
//        System.out.println(alert);
//        Assertions.assertThat(alertMessage).isEqualTo("Contato cadastrado com sucesso!");
    }
}
