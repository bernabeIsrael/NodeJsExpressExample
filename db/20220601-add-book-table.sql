-- UP

CREATE TABLE `books`
(
    id         BIGINT       NOT NULL AUTO_INCREMENT,
    name       VARCHAR(100) NOT NULL,
    created_at DATETIME     NOT NULL,
    updated_at DATETIME NULL,
    PRIMARY KEY (id)
);

-- DOWN

DROP TABLE IF EXISTS domain;